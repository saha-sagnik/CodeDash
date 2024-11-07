/**
 * An array of routes that are not accessible are available to Public
 * These routes do not require authentication
 * @type {string[]}
 */

export const publicRoutes = [
    "/",
    
];


/**
 * An array of routes that are not accessible are not available to Public
 * These routes require authentication
 * @type {string[]}
 */

export const authRoutes = [
    "/auth/login",
    "/auth/register"
];
/**
 * The prefix for API authentication route
 * These routes are used for API authetincation routes and events
 * @type {string}
 */

export const apiAuthPrefix = "/api/auth"

/**
 * This path is used to redirect after loggin in
 * @type {string}
 */

export const DEFAULT_LOGGEDIN_PATH = "/settings";