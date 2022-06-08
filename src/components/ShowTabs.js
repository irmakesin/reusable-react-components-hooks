import { Tab } from "../common/Tab/Tab";

export function ShowTabs() {
    return (
        <div>
            <Tab
                items={[
                    {label: "Trendyol", count: 4, disabled: true}, {label: "HepsiBurada", count: 56784},
                    {label: "Facebook", count: 850034},{label: "Netflix", count: 120},{label: "Twitter", count: 1}
                ]}
                activeTab={6}
            />
        </div>
    );
}
