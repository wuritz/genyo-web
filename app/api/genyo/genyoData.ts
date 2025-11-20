import fs from "fs";
import path from "path";
import { parse } from "yaml";

export interface ModuleProps {
    name: string;
    description: string;
    category: string;
}

export interface SystemProps {
    name: string;
    description: string;
}

export interface HudProps {
    name: string;
    description: string;
}

export interface YamlData {
    categories: string[];
    modules: ModuleProps[];
    systems: SystemProps[];
    huds: HudProps[];
}

// Read + parse YAML once at module load time (server-only)
function loadYaml(): YamlData {
    const yamlPath = path.join(process.cwd(), "public", "genyo_info.yaml");
    const yamlRaw = fs.readFileSync(yamlPath, "utf8");

    const parsed = parse(yamlRaw) as unknown;

    if (!parsed || typeof parsed !== "object") {
        throw new Error("genyo_info.yaml parsing failed: not an object");
    }

    const {
        categories = [],
        modules = [],
        systems = [],
        huds = [],
    } = parsed as Partial<YamlData>;

    if (!Array.isArray(modules) || !Array.isArray(systems) || !Array.isArray(huds)) {
        throw new Error("genyo_info.yaml parsing failed: invalid arrays");
    }

    return {
        categories,
        modules,
        systems,
        huds,
    };
}

const data = loadYaml();

export const genyoCategories: string[] = data.categories;
export const genyoModules: ModuleProps[] = data.modules;
export const genyoSystems: SystemProps[] = data.systems;
export const genyoHuds: HudProps[] = data.huds;