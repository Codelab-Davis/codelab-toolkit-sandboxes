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
        <Card>
            <CardHeader>
                <CardTitle>{title}</CardTitle>
                {description ? (
                    <CardDescription>{description}</CardDescription>
                ) : null}
            </CardHeader>
            <CardContent>
                {links.map((link) => (
                    <Link className="w-full" to={link.link}>
                        {link.title}
                    </Link>
                ))}
            </CardContent>
        </Card>
    );
}
