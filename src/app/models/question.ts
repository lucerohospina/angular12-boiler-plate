export interface Questions {
  id: string;
  canTakeOver: boolean;
  startedByMe: boolean;
  questions: Question[];
}

export interface Question {
  id: string;
  version: string;
  displayText: string;
  responseMaxLength: string;
  numberLevel: string;
  type: string;
  isMandatory: boolean;
  mandatoryIndicator: string;
  isImportant: boolean;
  importantIndicator: string;
  hasDependentQuestion: boolean;
  responseToDisplayDependentQuestionBoolean: boolean;
  responseToDisplayDependentQuestionList: string;
  responseToDisplayDependentQuestionStartDate: string;
  responseToDisplayDependentQuestionEndDate: string;
  additionalInfoRequired: boolean;
  additionalInfoLabel: string;
  responseToRequireAdditionalInfoBoolean: boolean;
  responseToRequireAdditionalInfoList: string;
  responseToRequireAdditionalInfoStartDate: string;
  responseToRequireAdditionalInfoEndDate: string;
  requiresNotification: boolean;
  responseToRequireNotificationBoolean: boolean;
  responseToRequireNotificationList: string;
  responseToRequireNotificationStartDate: string;
  responseToRequireNotificationEndDate: string;
  tooltipText?: string;
  hasHardStop: boolean;
  maximumNumberOfCheckboxes?: string;
  furtherInstructions?: string;
  textValidRange?: string;
  textInvalidRange?: string;
  isVisible: boolean;
  multilevelChoiceDef: string;
  expandAdditionalInfo: boolean;
  choiceOptions: ChoiceOption[];
  response: string;
  responseLabel: string;
  responseLabels: string[];
  additionalInfoResponse?: string;
  lastUpdated: string;
  lastUpdatedFirstName: string;
  lastUpdatedLastName: string;
  isRemediated: boolean;
  hasAlertFlag: boolean;
  hasSkippedFlag: boolean;
  dependentQuestion?: DependentQuestion[];
}

export interface ChoiceOption {
    id?: string;
    label: string;
    value: string;
}

export interface DependentQuestion {
    id: string;
    version: string;
    displayText: string;
    responseMaxLength: string;
    numberLevel: string;
    type: string;
    isMandatory: boolean;
    mandatoryIndicator?: string;
    isImportant: boolean;
    importantIndicator: string;
    hasDependentQuestion: boolean;
    responseToDisplayDependentQuestionBoolean: boolean;
    responseToDisplayDependentQuestionList: string;
    responseToDisplayDependentQuestionStartDate: string;
    responseToDisplayDependentQuestionEndDate: string;
    additionalInfoRequired: boolean;
    additionalInfoLabel?: string;
    responseToRequireAdditionalInfoBoolean: boolean;
    responseToRequireAdditionalInfoList: string;
    responseToRequireAdditionalInfoStartDate: string;
    responseToRequireAdditionalInfoEndDate: string;
    requiresNotification: boolean;
    responseToRequireNotificationBoolean: boolean;
    responseToRequireNotificationList: string;
    responseToRequireNotificationStartDate: string;
    responseToRequireNotificationEndDate: string;
    tooltipText?: string;
    hasHardStop: boolean;
    maximumNumberOfCheckboxes?: string;
    furtherInstructions?: string;
    textValidRange?: string;
    textInvalidRange?: string;
    isVisible: boolean;
    multilevelChoiceDef: string;
    expandAdditionalInfo: boolean;
}
