export interface Sections {
  sections: Section[];
}

export interface Section {
    sectionOccurrenceId: string;
    status: string;
    issueStatus: {
      hardStopCount: number;
      issueCount: number;
      remidiatedCount: number;
      skippedCount: number;
    },
    name: string;
    description: string;
    numberLevel: string;
    totalQuestions: string;
    answeredQuestions: string;
}
