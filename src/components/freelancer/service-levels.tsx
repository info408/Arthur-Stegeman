import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { serviceLevels } from "@/lib/tariffs";

export default function ServiceLevels() {
  return (
    <Card>
      <CardHeader>
        <CardTitle className="font-headline">Service Levels & Tariffs</CardTitle>
        <CardDescription>
          Review the different service levels and the applicable rate ranges.
        </CardDescription>
      </CardHeader>
      <CardContent>
        <Accordion type="single" collapsible className="w-full">
          {serviceLevels.map((level) => (
            <AccordionItem value={`item-${level.level}`} key={level.level}>
              <AccordionTrigger className="font-semibold">
                <div className="flex items-center gap-4">
                  <div className="bg-primary/10 text-primary font-bold rounded-full h-8 w-8 flex items-center justify-center">
                    {level.level}
                  </div>
                  <div className="text-left">
                    <span>{level.title}</span>
                    <p className="text-sm font-normal text-muted-foreground">{level.rate}</p>
                  </div>
                </div>
              </AccordionTrigger>
              <AccordionContent className="pl-16 pr-4 space-y-4">
                <div>
                  <h4 className="font-semibold mb-2">De dienst omvat:</h4>
                  <ul className="list-disc pl-5 space-y-1 text-sm text-muted-foreground">
                    {level.services.map((service, i) => (
                      <li key={i}>{service}</li>
                    ))}
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold mb-2">Vereist:</h4>
                  <ul className="list-disc pl-5 space-y-1 text-sm text-muted-foreground">
                    {level.requirements.map((req, i) => (
                      <li key={i}>{req}</li>
                    ))}
                  </ul>
                </div>
                {level.rangeApplication.length > 0 && (
                   <div>
                    <h4 className="font-semibold mb-2">Toepassing range:</h4>
                    <ul className="list-disc pl-5 space-y-1 text-sm text-muted-foreground">
                        {level.rangeApplication.map((app, i) => (
                        <li key={i}>{app}</li>
                        ))}
                    </ul>
                   </div>
                )}
                {level.includes && (
                   <div>
                    <h4 className="font-semibold mb-2">Inclusief:</h4>
                    <ul className="list-disc pl-5 space-y-1 text-sm text-muted-foreground">
                        {level.includes.map((inc, i) => (
                        <li key={i}>{inc}</li>
                        ))}
                    </ul>
                   </div>
                )}
                 {level.excludes && (
                   <div>
                    <h4 className="font-semibold mb-2">Exclusief:</h4>
                    <ul className="list-disc pl-5 space-y-1 text-sm text-muted-foreground">
                        {level.excludes.map((exc, i) => (
                        <li key={i}>{exc}</li>
                        ))}
                    </ul>
                   </div>
                )}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </CardContent>
    </Card>
  );
}
