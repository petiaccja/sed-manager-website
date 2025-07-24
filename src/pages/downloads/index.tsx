import styles from './downloads.module.css';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import DownloadIcon from '@site/static/img/ui/download.svg';
import BalanceIcon from '@site/static/img/ui/balance.svg';

export default function Download() {
    return (
        <Layout title={`Downloads`} description="Download precompiled executables and PBA images">
            <main style={{ maxWidth: '960px', margin: '0 auto' }}>
                <h1>
                    <DownloadIcon style={{ marginRight: '0.3em', fill: "currentColor" }} />
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

                <h1>
                    <BalanceIcon style={{ marginRight: '0.3em', fill: "currentColor" }} />
                    License
                </h1>

                SEDManager has a proprietary license. The key points:
                <ul>
                    <li> <b>Free for non-commercial users</b>. For example, encrypting a family computer. </li>
                    <li> <b>Free for individual commercial users</b> For example, you're a freelancer and you want to encrypt your work laptop. </li>
                    <li> <b>Not free for general commercial users</b> Anything other than the above two. Please reach out if you're interested in using SEDManager commercially. </li>
                    <li> <b>You can edit the source code</b> in all cases, but there are limitations on how you can share your edits. </li>
                </ul>

                This is just a quick summary, please read the <Link to="https://github.com/petiaccja/sed-manager-rs/blob/master/LICENSE.md">full license</Link> for the exact terms.
            </main>
        </Layout>
    );
};
