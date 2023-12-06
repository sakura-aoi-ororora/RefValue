/**
 * Represents a reference value that can be modified and cloned.
 * @template T - The type of the value.
 */
export class RefValue<T> {
    private value: T;

    /**
     * Creates a new instance of RefValue.
     * @param value - The initial value.
     */
    constructor(value: T) {
        this.value = value;
    }

    /**
     * Gets the current value.
     * @returns The current value.
     */
    public get(): T {
        return this.value;
    }

    /**
     * Sets a new value.
     * @param value - The new value.
     */
    public set(value: T): void {
        this.value = value;
    }

    /**
     * Creates a clone of the RefValue.
     * @returns A new RefValue instance with the cloned value.
     */
    public clone(): RefValue<T> {
        return new RefValue<T>(structuredClone(this.value));
    }

    /**
     * Dereferences the value.
     * @returns The dereferenced value.
     */
    public deref(): T {
        return this.value;
    }
}