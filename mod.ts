/**
 * Pass objects by reference
 */
export class RefValue<T> {
    private value: T;

    constructor(value: T) {
        this.value = value;
    }
    
    /**
     * @returns the value of the reference
     */
    public get(): T {
        return this.value;
    }

    /**
     * Sets the value of the reference
     * @param value the value to set the reference to
     */
    public set(value: T): void {
        this.value = value;
    }

    public clone(): RefValue<T> {
        return new RefValue<T>(structuredClone(this.value));
    }

    public deref(): T {
        return this.value;
    }
}