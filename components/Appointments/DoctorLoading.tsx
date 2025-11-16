import { Card, CardContent, CardHeader } from "../ui/card";
import { Skeleton } from "../ui/skeleton";

function DoctorCardSkeleton() {
    return (
        <Card className="cursor-pointer transition-all hover:shadow-lg">
            <CardHeader className="pb-4">
                <div className="flex items-center gap-4">
                    <Skeleton className="w-16 h-16 rounded-full" />
                    <div className="flex-1 space-y-2">
                        <Skeleton className="h-5 w-32" />
                        <Skeleton className="h-4 w-24" />
                        <div className="flex items-center gap-2">
                            <Skeleton className="h-4 w-16" />
                        </div>
                    </div>
                </div>
            </CardHeader>
            <CardContent className="space-y-3">
                <div className="flex items-center gap-2">
                    <Skeleton className="h-4 w-4 rounded-full" />
                    <Skeleton className="h-4 w-20" />
                </div>
                <div className="flex items-center gap-2">
                    <Skeleton className="h-4 w-4 rounded-full" />
                    <Skeleton className="h-4 w-24" />
                </div>
                <div className="flex items-center gap-2">
                    <Skeleton className="h-4 w-4 rounded-full" />
                    <Skeleton className="h-4 w-32" />
                </div>
                <Skeleton className="h-6 w-32" />
            </CardContent>
        </Card>
    );
}

export default function DoctorLoading() {
    return (
        <div className="grid md:grid-cols-2 gap-6 lg:grid-cols-3">
            {Array.from({ length: 6 }).map((_, index) => (
                <DoctorCardSkeleton key={`doctor-skeleton-${index}`} />
            ))}
        </div>
    );
}