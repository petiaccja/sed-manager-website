import styles from './downloads.module.css';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import DownloadIcon from '@site/static/img/ui/download.svg';
import BalanceIcon from '@site/static/img/ui/balance.svg';

export default function Downloads() {
    return (
        <Layout title={`Downloads`} description="Download precompiled executables and PBA images">
            <main style={{ maxWidth: '960px', margin: '0 auto' }}>
                <h1>
                    Latest release
                </h1>

                <h2>Application</h2>

                <table className={styles.downloadTable}>
                    <thead>
                        <tr>
                            <th></th>
                            <th>Windows</th>
                            <th>Linux</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>x86-64</td>
                            <td>
                                <Link to="https://github.com/petiaccja/sed-manager-rs/releases/latest/download/SEDManager_Windows_x86_64.zip">
                                    SEDManager_Windows_x86_64.zip
                                </Link>
                            </td>
                            <td>
                                <Link to="https://github.com/petiaccja/sed-manager-rs/releases/latest/download/SEDManager_Linux_x86_64.zip">
                                    SEDManager_Linux_x86_64.zip
                                </Link>
                            </td>
                        </tr>
                    </tbody>
                </table>

                <h2>Pre-boot authentication</h2>

                <table className={styles.downloadTable}>
                    <thead>
                        <tr>
                            <th></th>
                            <th>Bootable ISO</th>
                        </tr>
                    </thead>
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
            </main>
        </Layout>
    );
};
