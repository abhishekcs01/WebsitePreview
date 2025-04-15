import { RdsBooleanChart } from "../../raaghu-elements/src";
import { CardTypes } from "../../raaghu-elements/src";

const CallOverview = () => {
    return (
        <RdsCard
            cardTitle="Call Overview"
            showTitle
            showTitleAndSubText
            type={CardTypes.CardWithBooleanChart}
            style="Default"
            layout="Vertical"
            showCardText={false}
        >
            <div className="d-flex align-items-center">
                <div className="">
                    <RdsBooleanChart
                        centerIconName="headset"
                        chartStyle=""
                        dataSets={[{
                            backgroundColor: ['#30BD6E', '#F5F5F5'],
                            borderColor: ['transparent'],
                            cutout: '80%',
                            data: [97, 3],
                            fillRect: [200, 100, 40, 10],
                            fillStyle: '#F5F5F5',
                            label: 'Dataset 1',
                            title: { dockInsidePlotArea: true, text: 'Doughnut Chart', verticalAlign: 'center' }
                        }]}
                        id="Boolean1"
                        labels={['Total Calls Connected', 'Total Calls Disconnected']}
                        options={{
                            cutoutPercentage: 75,
                            elements: { center: { text: '50%' } },
                            legend: { display: false },
                            maintainAspectRatio: false,
                            plugins: {
                                doughnutlabel: { labels: [{ font: { size: 20, weight: 'bold' }, text: '550' }, { text: 'total' }] },
                                legend: { align: 'start', display: false, position: 'right' },
                                series: { label: { display: false, position: 'inside', text: 'total' } },
                                tooltip: { enabled: false }
                            },
                            responsive: true
                        }}
                    />
                </div>
                <div className="ms-2">
                    <h3 className="custom-title">
                        97%
                    </h3>
                    <p className="custom-desc mb-0">
                        Total Calls Connected
                    </p>
                </div>
            </div>
            <div className="d-flex align-items-center mt-3">
                <div className="">
                    <RdsBooleanChart
                        centerIconName="users"
                        chartStyle=""
                        dataSets={[{
                            backgroundColor: ['#E94E4E', '#F5F5F5'],
                            borderColor: ['transparent'],
                            cutout: '80%',
                            data: [80, 20],
                            fillRect: [200, 100, 40, 10],
                            fillStyle: '#F5F5F5',
                            label: 'Dataset 1',
                            title: { dockInsidePlotArea: true, text: 'Doughnut Chart', verticalAlign: 'center' }
                        }]}
                        id="Boolean2"
                        labels={['Total Client calls connected', 'Total Client calls disconnected']}
                        options={{
                            cutoutPercentage: 75,
                            elements: { center: { text: '50%' } },
                            legend: { display: false },
                            maintainAspectRatio: false,
                            plugins: {
                                doughnutlabel: { labels: [{ font: { size: 20, weight: 'bold' }, text: '550' }, { text: 'total' }] },
                                legend: { align: 'start', display: false, fontSize: 20, position: 'right' },
                                series: { label: { display: true, position: 'inside', text: 'total' } },
                                tooltip: { enabled: false }
                            },
                            responsive: true
                        }}
                    />
                </div>
                <div className="ms-2">
                    <h3 className="custom-title">
                        35,21,256
                    </h3>
                    <p className="custom-desc mb-0">
                        Total Clients Called
                    </p>
                </div>
            </div>
        </RdsCard>
    );
};

export default CallOverview;