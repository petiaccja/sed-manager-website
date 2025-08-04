import styles from './pricing.module.css';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';

export default function Pricing() {
    return (
        <Layout title={`Pricing`} description="SEDManager is free for non-commercial use. Learn more about pricing and terms and conditions here.">
            <main style={{ maxWidth: '960px', margin: '0 auto' }}>
                <h1>Pricing</h1>

                <table className={styles.downloadTable}>
                    <thead>
                        <tr>
                            <th></th>
                            <th>Non-commercial use</th>
                            <th>Individual commercial use</th>
                            <th>General commercial use</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td><center><b>Encrypting data</b></center></td>
                            <td>Free</td>
                            <td>Free</td>
                            <td><Link to="mailto:license@sedmanager.app">Contact me</Link></td>
                        </tr>
                        <tr>
                            <td><center><b>Testing & reviewing drives</b></center></td>
                            <td>Free</td>
                            <td>No</td>
                            <td><Link to="mailto:license@sedmanager.app">Contact me</Link></td>
                        </tr>
                        <tr>
                            <td><center><b>Source code available</b></center></td>
                            <td>Yes</td>
                            <td>Yes</td>
                            <td>Yes</td>
                        </tr>
                        <tr>
                            <td><center><b>Example scenario</b></center></td>
                            <td>Encrypting your home computer you store your family pictures on</td>
                            <td>Encrypting a laptop you bought for your freelance graphic design work</td>
                            <td>Encrypting employee laptops in a large company</td>
                        </tr>
                    </tbody>
                </table>

                This summary is only for informational purposes, please read the fine print in the <Link to="https://github.com/petiaccja/sed-manager-rs/blob/master/LICENSE.md">full license</Link>.
            </main>
        </Layout>
    );
};
