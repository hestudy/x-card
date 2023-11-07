import { drizzle } from "drizzle-orm/neon-http";
import { neon, neonConfig } from "@neondatabase/serverless";

neonConfig.fetchConnectionCache = true;

import { env } from "~/env.mjs";
import * as schema from "./schema";

export const db = drizzle(neon(env.DATABASE_URL!), { schema });
