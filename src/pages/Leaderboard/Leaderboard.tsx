import SectionHead from "@/components/SectionHead/SectionHead";
import "../../styles/leaderborad.css"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { useGetDonationDataQuery } from "@/redux/apis/publicApis";
import { TDonor } from "@/types/donor.type";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Crown } from "lucide-react";

const Leaderboard = () => {

    const { data } = useGetDonationDataQuery(undefined)

    return (
        <section className="my-20">
            <SectionHead title="Top Donors Leaderboard" description="Check out our top donors who have made significant contributions towards our cause. These generous individuals have demonstrated their commitment to making a positive impact on the community. Join them in making a difference today!" />


            <div className="my-14 tableBg w-full lg:w-3/4 mx-auto p-5 rounded">
                <Table>
                    <TableHeader>
                        <TableRow className="text-base bg-primary hover:bg-primary">
                            <TableHead className="font-semibold text-white w-40">Sr.No</TableHead>
                            <TableHead className="font-semibold text-white">Donor</TableHead>
                            <TableHead className="font-semibold text-right text-white">Amount</TableHead>
                        </TableRow>
                    </TableHeader>
                    <TableBody>
                        {
                            data?.map((donor: TDonor, indx: number) => (<TableRow className="text-base" key={donor?._id}>
                                <TableCell className="font-bold">{indx + 1}</TableCell>
                                <TableCell>
                                    <div className="flex items-center gap-2">
                                        <div>
                                            {
                                                indx === 0 ? <Crown className="text-yellow-400 -rotate-12" /> : indx === 1 ? <Crown className="text-slate-500 -rotate-12" /> : indx === 2 ? <Crown className="text-amber-950 -rotate-12" /> : ""
                                            }
                                            <Avatar>
                                                <AvatarImage src={donor?.img} alt={donor?.name} />
                                                <AvatarFallback>Donor</AvatarFallback>
                                            </Avatar>
                                        </div>
                                        <div className="flex flex-col">
                                            <span className="font-bold">{donor?.name}</span>
                                            <span className="font-semibold text-gray-600">{donor?.email}</span>
                                        </div>
                                    </div>
                                </TableCell>
                                <TableCell className="text-right font-bold">
                                    {donor?.donationAmount}
                                </TableCell>
                            </TableRow>))
                        }


                    </TableBody>
                </Table>
            </div>
        </section>
    );
};

export default Leaderboard;