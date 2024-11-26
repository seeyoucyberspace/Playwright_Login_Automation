export class NavigationError extends Error {
    constructor(message: string) {
        super(message);
        this.name = 'NavigationError';
    }
}

export class ElementNotFoundError extends Error {
    constructor(message: string) {
        super(message);
        this.name = 'ElementNotFoundError';
    }
}