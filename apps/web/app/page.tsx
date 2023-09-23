import { Button } from "@/module/one/OneMfe";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="z-10 max-w-5xl w-full items-center justify-between font-mono text-sm lg:flex">
        Yarn v3 Berry Monorepo prototype
        Using Button from @fizzog/one that uses a different version of reactjs
        <Button />
      </div>
    </main>
  )
}
