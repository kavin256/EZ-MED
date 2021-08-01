export class PricingRule {
    id: number;
    code: string;
    description: string;
    validFrom: string;
    validTo: string;
    priority: string;
    public: boolean;
    rateType: string;
    rate: string;
    ruleType: string;
    controlRules: string;
}
