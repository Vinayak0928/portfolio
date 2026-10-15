export function apiError(status: number, message: string): Response {
    return Response.json({ error: message }, { status });
}

export function withApi(handler: (args: any) => Promise<Response>) {
    return async (args: any) => {
        try {
            return await handler(args);
        } catch (err: any) {
            return apiError(500, err?.message || 'Internal Server Error');
        }
    };
}
