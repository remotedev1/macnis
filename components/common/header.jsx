import { cn } from "@/lib/utils";

export const Header = ({ label }) => {
  // const companyName = process.env.NEXT_PUBLIC_COMPANY_NAME;
  const companyName = "test"; // Fallback for testing purposes
  //TODO: Replace with actual company name from environment variable
  // console.log(process.env.NEXT_PUBLIC_COMPANY_NAME);
  return (
    <div className="w-full flex flex-col gap-y-4 items-center justify-center">
      <h1 className={cn("text-3xl font-semibold")}>🔐 {companyName} </h1>
      <p className="text-muted-foreground text-sm">{label}</p>
    </div>
  );
};
