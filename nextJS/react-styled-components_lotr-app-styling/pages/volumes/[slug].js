import { useRouter } from "next/router";
import { volumes } from "../../lib/data";
import ArrowLink from "@/components/ArrowLink/ArrowLink";
import PagePagination from "@/components/PagePagination/PagePagination";
import BookSingle from "@/components/BookSingle/BookSingle";

export default function VolumeDetail() {
  const router = useRouter();
  const { slug } = router.query;

  const volumeIndex = volumes.findIndex((volume) => volume.slug === slug);

  const volume = volumes[volumeIndex];
  const previousVolume = volumes[volumeIndex - 1];
  const nextVolume = volumes[volumeIndex + 1];

  if (!volume) {
    return null;
  }

  return (
    <>
      <ArrowLink href="/volumes">All Volumes</ArrowLink>
      <BookSingle volume={volume} />
      <PagePagination>
        {previousVolume ? (
          <ArrowLink href={`/volumes/${previousVolume.slug}`} arrow="left">
            <i>Previous Volume:</i>
            <p>{previousVolume.title}</p>
          </ArrowLink>
        ) : null}
        {nextVolume ? (
          <ArrowLink href={`/volumes/${nextVolume.slug}`} arrow="right">
            <i>Next Volume:</i>
            <p>{nextVolume.title}</p>
          </ArrowLink>
        ) : null}
      </PagePagination>
    </>
  );
}
