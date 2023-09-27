import { Button } from "@/module/one/OneMfe";
import MuiButton from "@mui/material/Button";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="z-10 max-w-5xl w-full items-center justify-between font-mono text-sm lg:flex">
        Yarn v3 Berry Monorepo prototype with first Button from @chariot/one
        that uses a different version of reactjs and a different version of mui
        from the Root Theme Button
        <br />
        <Button />
        <br />
        <MuiButton variant="contained">Root Theme Button</MuiButton>
      </div>
    </main>
  );
}
