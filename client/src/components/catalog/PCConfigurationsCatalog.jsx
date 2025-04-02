import { useAllConfigurations } from "../../api/PCConfigurationsApi";
import PCConfiguration from "./PCConfiguration";

export default function PCConfigurationsCatalog() {
    const {configurations} = useAllConfigurations();

    return (
            <section id="catalog">
                <h1>PC Configurations</h1>

                {configurations?.length > 0
                    ? configurations.map(config => <PCConfiguration key={config._id} {...config} />)
                    : <h2 className="no-configs">No Configurations Yet</h2>
                }

            </section>
    );
}