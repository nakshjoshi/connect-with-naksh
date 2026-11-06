import { redirect } from "next/navigation";

/** Old route — the work now lives at /work as case studies. */
export default function ProjectsPage() {
  redirect("/work");
}
