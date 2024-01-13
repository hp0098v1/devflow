import { BADGE_CRITERIA } from "@/constants/constants";

export type SidebarLinkType = {
  imgURL: string;
  route: string;
  label: string;
};

export type SearchParamsPropsType = {
  searchParams: { [key: string]: string | undefined };
};

export type URLPropsType = {
  params: { id: string };
  searchParams: { [key: string]: string | undefined };
};

export type ParamsPropsType = {
  params: { id: string };
};

export type BadgeCountsType = {
  GOLD: number;
  SILVER: number;
  BRONZE: number;
};

export type BadgeCriteriaType = keyof typeof BADGE_CRITERIA;

export type JobType = {
  id?: string;
  employer_name?: string;
  employer_logo?: string | undefined;
  employer_website?: string;
  job_employment_type?: string;
  job_title?: string;
  job_description?: string;
  job_apply_link?: string;
  job_city?: string;
  job_state?: string;
  job_country?: string;
};

export type CountryType = {
  name: {
    common: string;
  };
};
