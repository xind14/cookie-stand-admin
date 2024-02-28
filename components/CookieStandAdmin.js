import Head from 'next/head';
import { useState } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import ReportTable from '@/components/ReportTable';
import CreateForm from '@/components/CreateForm';
import { hours } from '../data';

export default function Home() {

    const [standReports, setStandReports] = useState([]);

    function handleCreate(standInfo) {
        setStandReports([...standReports, standInfo]);
    }

    return (
        <div >
            <Head>
                <title>Cookie Stand Admin</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <Header />
            <main className="p-8">
                <CreateForm onCreate={handleCreate} />
                <ReportTable reports={standReports} hours={hours} />
            </main>
            <Footer reports={standReports} hours={hours} />
        </div>
    );
}