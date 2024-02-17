import { TSort } from "@/types/filter.type";
import { DropdownMenu, DropdownMenuContent, DropdownMenuLabel, DropdownMenuRadioGroup, DropdownMenuRadioItem, DropdownMenuSeparator, DropdownMenuTrigger } from "../ui/dropdown-menu";
import { Button } from "../ui/button";

const PostFilter = ({ sort, setSort }: TSort) => {
    return (
        <DropdownMenu>
            <DropdownMenuTrigger asChild>
                <Button className="myBtn w-36 font-semibold">Sort</Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent className="w-56">
                <DropdownMenuLabel>Sort by</DropdownMenuLabel>
                <DropdownMenuSeparator />
                <DropdownMenuRadioGroup value={sort} onValueChange={setSort}>
                    <DropdownMenuRadioItem value="">All</DropdownMenuRadioItem>
                    <DropdownMenuRadioItem value="Date">Date</DropdownMenuRadioItem>
                    <DropdownMenuRadioItem value="Location">Location</DropdownMenuRadioItem>
                    <DropdownMenuRadioItem value="Amount">Amount</DropdownMenuRadioItem>
                </DropdownMenuRadioGroup>
            </DropdownMenuContent>
        </DropdownMenu>
    );
};

export default PostFilter;