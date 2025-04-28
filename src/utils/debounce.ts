export function debounce<T extends (...args: any[]) => void>(
    func: T,
    wait: number = 100
): (...args: Parameters<T>) => void {
    let timeout: ReturnType<typeof setTimeout> | null = null;
    let lastArgs: Parameters<T> | null = null;

    function later() {
        if (lastArgs) {
            func(...lastArgs); // Call the function with the last arguments
            lastArgs = null; // Reset lastArgs after calling the function
        }
        timeout = null; // Reset timeout after calling
    }

    return function (...args: Parameters<T>) {
        if (timeout === null) {
            func(...args); // Immediate execution on the first call
        } else if (lastArgs === null) {
            lastArgs = args; // Store the latest arguments for the final call
            clearTimeout(timeout); // Clear the previous timeout
            timeout = setTimeout(later, wait); // Set up the next scheduled call
        } else {
            lastArgs = args;
        }

    };
}

