export const required = value => value ? undefined : 'Required';
export const email = value => value && !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value) ? 'Invalid email address' : undefined;
export const maxLength = value => value && value.length > 20 ? 'Must be 20 characters or less' : undefined