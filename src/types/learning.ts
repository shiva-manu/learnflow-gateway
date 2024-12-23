export interface SubModule {
  title: string;
  content: string;
}

export interface Module {
  title: string;
  subModules: SubModule[];
}

export interface DayModule {
  day: number;
  title: string;
  description: string;
  modules: Module[];
}