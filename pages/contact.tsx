import { Mail, Linkedin, FileText } from 'lucide-react'
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

const socialLinks = [
  {
    title: "CV Español",
    url: "https://diamond-stoplight-f48.notion.site/Franco-Ciprian-ES-46007b0d459b483692ed53154733bf39?pvs=4",
    icon: <FileText />
  },
  {
    title: "CV English",
    url: "https://diamond-stoplight-f48.notion.site/Franco-Ciprian-EN-e0aefa85a8b24437ba8745cb10b7aefc?pvs=4",
    icon: <FileText />
  },
  {
    title: "by E-mail",
    url: "mailto:franco_ciprian@hotmail.com",
    icon: <Mail />
  },
  {
    title: "by LinkedIn",
    url: "http://www.linkedin.com/in/franco-ciprian-387231222/",
    icon: <Linkedin />
  },
  {
    title: "by GitHub",
    url: "https://github.com/francociprian",
    icon: <svg
      className="h-6 w-6"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <path
        d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"
        fill="currentColor"
      ></path>
    </svg>
  },
];

function CardContainer({
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      className={cn(
        "flex items-center justify-center max-w-[455px] [&>div]:w-full p-4",
        className
      )}
      {...props}
    />
  )
}

function CardContact() {
  return (
    <CardContainer>
      <Card>
        <CardHeader className="space-y-1">
          <CardTitle className="text-2xl">Contact Me</CardTitle>
          <CardDescription>
            If you want to know more about me, you can contact me through these means.
          </CardDescription>
        </CardHeader>
        <CardContent className="grid gap-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {socialLinks.map((l, i) => (
              <Button key={i} asChild className='max-w-sm w-full' variant='outline'>
                <a
                  href={l.url}
                  target="_blank"
                >
                  {l.icon}
                  <span className="ml-2">{l.title}</span>
                </a>
              </Button>
            ))}
          </div>
        </CardContent>
      </Card>
    </CardContainer>
  )
}

export default function contact() {
  return (
    <div className='h-screen flex flex-col justify-center items-center '>
      <div className="col-span-2 grid items-start gap-6 lg:col-span-1">
        <CardContact/>
      </div>
    </div>
  )
}