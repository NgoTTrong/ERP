export function formatNumberWithCommas(number?: number) {
	if (!number || number == 0) return 0;
	if (number) {
		return number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
	}
}
export function isValidPhone(phone?: string) {
	if (phone) {
		const validPhone = new RegExp("^(0|\\+84)[0-9]{9}$");

		return validPhone.test(phone);
	}
	return false;
}

export function isValidEmail(email?: string) {
	if (email) {
		const validEmail = new RegExp(
			"^[a-zA-Z0-9._:$!%-]+@[a-zA-Z0-9.-]+.[a-zA-Z]$"
		);

		return validEmail.test(email);
	}
	return true;
}
