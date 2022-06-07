class AppError extends Error {
	public readonly name: string;
	public readonly message: string;
	public readonly httpCode: number;

	constructor(name: string, httpCode: number, message: string) {
		super(message);

		Object.setPrototypeOf(this, new.target.prototype);

		this.name = name;
		this.httpCode = httpCode;

		Error.captureStackTrace(this);
	}
}

export { AppError };
