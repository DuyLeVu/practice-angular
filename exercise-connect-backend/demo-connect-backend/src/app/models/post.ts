import {Status} from "./status";

export interface Post {
  id?: string;
  createAt?: Date;
  description?: string;
  content?: string;
  status?: Status;
}
