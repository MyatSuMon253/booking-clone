import { fetchResults } from "@/lib/fetchResults";
import { notFound } from "next/navigation";
import React from "react";

type Props = {
  searchParams: SearchParams;
};

export type SearchParams = {
  url: URL;
  group_adults: string;
  group_children: string;
  checkin: string;
  checkout: string;
  no_rooms: string;
};

const SearchPage = async ({ searchParams }: Props) => {
  if (!searchParams.url)
    return notFound();

  const results = await fetchResults(searchParams)

  // if (!results) 
  //   return <div>No Results...</div>

  return <div>SearchPage</div>;
};

export default SearchPage;
