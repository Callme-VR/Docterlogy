/** 
 * Loading skeleton components for doctor cards
 */
import { Card, CardContent, CardHeader } from "../ui/card";
import { Skeleton } from "../ui/skeleton";

function DoctorCardSkeleton({ uniqueKey }: { uniqueKey: string }) {
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
    // Create individual skeleton components with unique keys to avoid index-based keys
    return (
        <div className="grid md:grid-cols-2 gap-6 lg:grid-cols-3">
            <DoctorCardSkeleton uniqueKey="skeleton-1" />
            <DoctorCardSkeleton uniqueKey="skeleton-2" />
            <DoctorCardSkeleton uniqueKey="skeleton-3" />
            <DoctorCardSkeleton uniqueKey="skeleton-4" />
            <DoctorCardSkeleton uniqueKey="skeleton-5" />
            <DoctorCardSkeleton uniqueKey="skeleton-6" />
        </div>
    );
}