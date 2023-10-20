import { Link } from "react-router-dom";
import { Card, CardContent, CardDescription, CardTitle } from "./ui/Card";

export type LinkType = {
    title: string;
    link: string;
};

type LinkGroupTypeCardProps = {
    title: string;
    description: string;
    links: LinkType[];
};

export default function LinkGroupTypeCard({
    title,
    description,
    links,
}: LinkGroupTypeCardProps) {
    return (
        <Card>
            <CardTitle>{title}</CardTitle>
            <CardDescription>{description}</CardDescription>
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
