import styles from './downloads.module.css';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import ThemedImage from '@theme/ThemedImage';
import Tabs from '@theme/Tabs'
import TabItem from '@theme/TabItem'

export default function Downloads() {
    return (
        <Layout title={`Downloads`} description="Download the configuration app and the pre-boot authentication environment for Windows & Linux.">
            <main style={{ maxWidth: '996px', margin: '0 auto', display: "flex", flexDirection: "column" }}>
                <Tabs
                    groupId="operating-system"
                    defaultValue="windows"
                    values={[
                        { label: 'Windows', value: 'windows' },
                        { label: 'Linux', value: 'linux' }
                    ]}
                    block={true}
                >
                    <TabItem value="windows">
                        <table className={styles.downloadTable}>
                            <tbody>
                                <tr>
                                    <td>x86-64</td>
                                    <td>
                                        <Link to="https://github.com/petiaccja/sed-manager-rs/releases/latest/download/SEDManager_Windows_x86_64.zip">
                                            SEDManager_Windows_x86_64.zip
                                        </Link>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </TabItem>
                    <TabItem value="linux">
                        <table className={styles.downloadTable}>
                            <tbody>
                                <tr>
                                    <td>x86-64</td>
                                    <td>
                                        <Link to="https://github.com/petiaccja/sed-manager-rs/releases/latest/download/SEDManager_Linux_x86_64.zip">
                                            SEDManager_Linux_x86_64.zip
                                        </Link>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </TabItem>
                </Tabs>

                <div style={{ minHeight: "32px" }}></div>

                <Tabs
                    groupId="pba"
                    defaultValue="pba"
                    values={[
                        { label: 'Pre-boot authentication', value: 'pba' },
                    ]}
                    block={true}
                >
                    <TabItem value='pba'>
                        <table className={styles.downloadTable}>
                            <tbody>
                                <tr>
                                    <td>x86-64</td>
                                    <td>
                                        <Link to="https://github.com/petiaccja/sed-manager-pba/releases/latest/download/SEDManagerPBA_x86_64.zip">
                                            SEDManagerPBA_x86_64.zip
                                        </Link>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </TabItem>
                </Tabs>

                <div style={{ flex: 100, minHeight: "48px" }}></div>

                <div>
                    <center>
                        <Link to="https://slint.dev">
                            <ThemedImage
                                alt="Made with slint"
                                width={"168px"}
                                sources={{
                                    light: "https://slint.dev/logo/MadeWithSlint-logo-light.svg",
                                    dark: "https://slint.dev/logo/MadeWithSlint-logo-dark.svg",
                                }}
                            />
                        </Link>
                        <br />
                        SEDManager was built using Slint, a powerful UI toolkit.
                    </center>
                </div>
            </main>
        </Layout>
    );
};
