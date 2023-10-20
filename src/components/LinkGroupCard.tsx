import { Link } from "react-router-dom";
import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
} from "./ui/Card";

export type LinkType = {
    title: string;
    link: string;
};

type LinkGroupTypeCardProps = {
    title: string;
    description?: string;
    links: LinkType[];
};

export default function LinkGroupCard({
    title,
    description,
    links,
}: LinkGroupTypeCardProps) {
    return (
        <Card className="w-[20em]">
            <CardHeader>
                <CardTitle>{title}</CardTitle>
                {description ? (
                    <CardDescription>{description}</CardDescription>
                ) : null}
            </CardHeader>
            <CardContent>
                <div className="flex w-full flex-wrap">
                    {links.map((link) => (
                        <LinkDiv key={link.link} link={link} />
                    ))}
                </div>
            </CardContent>
        </Card>
    );
}

type LinkDivProps = {
    link: LinkType;
};

function LinkDiv({ link }: LinkDivProps) {
    return (
        <Link className="w-full" to={link.link}>
            <span className="border-b border-dashed border-blue-700">
                {link.title}
            </span>
        </Link>
    );
}
