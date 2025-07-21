import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Skeleton } from "@/components/ui/skeleton";

export default function kanjiLoader(kanji: string) {
  return (
    <main className="flex flex-col items-center justify-center px-4 py-12">
      <Card className="w-full max-w-md shadow-lg">
        <CardHeader>
          <CardTitle className="text-2xl text-center">
            <Skeleton className="h-4 w-[200px] m-10" />
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4 mt-7">
          <Skeleton className="h-4 w-full mb-8" />
          <Skeleton className="h-4 w-full mb-8" />
          <Skeleton className="h-4 w-full mb-8" />
          <Skeleton className="h-4 w-full mb-8" />
          <Skeleton className="h-4 w-full mb-8" />
          <Skeleton className="h-4 w-full mb-8" />
          <Skeleton className="h-4 w-full mb-8" />
          <Skeleton className="h-4 w-full mb-8" />
          <Skeleton className="h-4 w-full mb-8" />
          <Skeleton className="h-4 w-full mb-8" />
          <Skeleton className="h-4 w-full mb-8" />
          <Skeleton className="h-4 w-full mb-8" />
          <Skeleton className="h-4 w-full mb-8" />
          <Skeleton className="h-4 w-full mb-8" />
          <Skeleton className="h-4 w-full mb-8" />
          <Skeleton className="h-4 w-full mb-8" />
          <Skeleton className="h-4 w-full mb-8" />
          <Skeleton className="h-4 w-full mb-8" />
        </CardContent>
      </Card>
    </main>
  );
}
