export interface Community {
  id: string;
  name: string;
  desc: string;
  unitPrice: string;
  link: string;
}
export interface RangeType {
  id: string;
  name: string;
  desc: string;
  community: Community[];
}
export interface AreaType {
  id: string;
  name: string;
  type: string;
  rangeDetail: string;
  rangeList: RangeType[];
}
