import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { TEvent } from "@/types/events.type";
import { Check, LocateIcon, Timer } from "lucide-react";

const Event = ({ item }: { item: TEvent }) => {
    return (
        <Card className="w-full lg:w-80">
            <CardHeader>
                <CardTitle className="h-16">{item?.title}</CardTitle>
                <CardDescription>{item?.description}</CardDescription>
            </CardHeader>
            <CardContent className="grid gap-4">
                <div className=" flex items-center space-x-4">
                    <div className="flex flex-col items-center bg-secondary py-2 px-2 text-sm font-bold text-primary rounded">
                        <p>{item?.date?.split(" ")[0]}</p>
                        <p>{item?.date?.split(" ")[1]}</p>
                    </div>
                    <div className="flex-1 space-y-3">
                        <p className="text-sm font-medium leading-none flex items-center gap-1">
                            <LocateIcon /> <span>{item?.location}</span>
                        </p>
                        <p className="text-sm text-muted-foreground flex items-center gap-1">
                            <Timer /> <span>{item?.time}</span>
                        </p>
                    </div>
                </div>
            </CardContent>
            <CardFooter>
                <Button className="w-full">
                    <Check className="mr-2 h-4 w-4" /> Join Now
                </Button>
            </CardFooter>
        </Card>
    );
};

export default Event;