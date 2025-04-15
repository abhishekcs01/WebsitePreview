import DailySummaryCard from "./DailySummaryCard";
import ProfitShareCard from "./ProfitShareCard";
import SalesMapCard from "./SalesMapCard";
import CallOverview from "./CallOverview";
import DailySalesGrowthCard from "./DailySalesGrowthCard";
import MemberActivity from "./MemberActivity";
import ProfitCard from "./ProfitCard";
import DateTabs from "./DateTabs";
import "./DateTabs.css";

const DashboardPage = () => {
    return (
        <RdsContainer className="py-4 h-100 overflow-auto">
            <RdsRow>
                <RdsCol size="12">
                    <h4 className="mb-4">Daily Summary</h4>
                </RdsCol>
            </RdsRow>
            <RdsRow>
                <RdsCol colSpan={8} className="mb-4">
                    <div className="mb-3">
                        <DateTabs />
                    </div>
                    <DailySummaryCard />
                </RdsCol>
                <RdsCol colSpan={4} className="mb-4">
                    <SalesMapCard />
                </RdsCol>
            </RdsRow>
            <RdsRow>
                <RdsCol colSpan={4} className="mb-4">
                    <ProfitShareCard />
                </RdsCol>
            </RdsRow>
            <RdsRow>
                <RdsCol colSpan={4} className="mb-4">
                    <CallOverview />
                </RdsCol>
                <RdsCol colSpan={4} className="mb-4">
                    <DailySalesGrowthCard />
                </RdsCol>
                <RdsCol colSpan={4} className="mb-4">
                    <ProfitCard />
                </RdsCol>
            </RdsRow>
            <RdsRow>
                <RdsCol size="12" className="mb-4">
                    <MemberActivity />
                </RdsCol>
            </RdsRow>
        </RdsContainer>
    );
};

export default DashboardPage;