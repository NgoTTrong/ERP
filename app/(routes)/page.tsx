import { redirect } from "next/navigation";

const RootPage = async () => {
	redirect("/auth");
	return <main></main>;
};

export default RootPage;
