import { SortableCell } from './Algorithm.model';
import { useCallback, useEffect, useRef, useState } from 'react';

export const useAlgorithm = (algorithmGeneratorFunction: Generator<SortableCell[], SortableCell[]> | null): [SortableCell[], () => void, () => void, boolean] => {
    const [snapshot, setSnapshot] = useState<SortableCell[]>([]);
    const [isDone, setIsDone] = useState(false);
    const [isAutoStepStarted, setIsAutoStepStarted] = useState(false);

    const nextStep = (isManuallyClicked = true) => {
        if (isManuallyClicked) {
            setIsAutoStepStarted(false);
        }

        if (!algorithmGeneratorFunction) {
            return;
        }
        const nextSnapshot = algorithmGeneratorFunction.next();
        setSnapshot(nextSnapshot.value);

        if (nextSnapshot.done) {
            setIsDone(true);
            return;
        }
    };

    useEffect(() => {
        if (!isAutoStepStarted) {
            return;
        }

        const id = setTimeout(() => {
            if (isDone) {
                setIsAutoStepStarted(false);
            } else {
                nextStep(false);
            }
        }, 200);

        return () => clearTimeout(id);
    }, [snapshot, isAutoStepStarted, isDone]);

    const autoStep = () => {
        setIsAutoStepStarted(true);
    }

    return [snapshot, nextStep, autoStep, isDone];
}

export const useAlgorithmWithRef = (algorithmGeneratorFunction: Generator<SortableCell[], SortableCell[]> | null): [SortableCell[], () => void, () => void, boolean] => {
    const [isDone, setIsDone] = useState(false);
    const [snapshot, setSnapshot] = useState<SortableCell[]>([]);
    const algorithmRef = useRef<{ isDone: boolean, isInProgress: boolean }>({isDone, isInProgress: true});

    const nextStep = useCallback((isFromManualClick = true) => {
        if (!algorithmGeneratorFunction) {
            return
        }

        if (isFromManualClick) {
            algorithmRef.current.isInProgress = false;
        }

        const nextState = algorithmGeneratorFunction.next();
        setSnapshot(nextState.value);

        if (nextState.done) {
            setIsDone(true);
            algorithmRef.current.isDone = true;
            return;
        }
    }, [algorithmGeneratorFunction, isDone]);

    const callback = useCallback(() => {
        if (!algorithmRef.current.isInProgress) {
            return;
        }

        if (algorithmRef.current.isDone) {
            return;
        }

        setTimeout(() => {
            nextStep(false);
            if (!algorithmRef.current.isDone) {
                callback();
            }
        }, 200);
    }, [nextStep, algorithmRef]);

    const autoStep = () => {
        algorithmRef.current.isInProgress = true;
        callback();
    }

    return [snapshot, nextStep, autoStep, isDone];
}
