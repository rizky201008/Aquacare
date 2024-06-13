import {router, useForm, usePage, Head} from "@inertiajs/react";
import AdminLayout from "@/Layouts/AdminLayout.jsx";

export default function ReportDetail({auth}) {
    const role = auth.user.roles.name;
    const {report} = usePage().props;
    const {flash, errors, feedbacks} = usePage().props;
    const {data, setData, reset, put} = useForm({
        report_id: report.id,
        message: "",
    });

    const storeFeedback = (e) => {
        e.preventDefault();
        router.post(route("feedback.post"), data, {
            onSuccess: () => {
                reset();
            },
        });
    };

    function convertUTCDateToLocalDate(date) {
        let newDate = new Date(
            date.getTime() + date.getTimezoneOffset() * 60 * 1000
        );

        let offset = date.getTimezoneOffset() / 60;
        let hours = date.getHours();

        newDate.setHours(hours - offset);

        return newDate;
    }

    const title = `Laporan ${report.detail}`;

    return (
        <AdminLayout>
            <Head>
                <title>{title}</title>
            </Head>
            <div className="card w-full bg-white  mb-3">
                <div className="card-body">
                    <h2 className="card-title">Laporan #{report.id}</h2>
                    <p className="badge badge-neutral py-3 px-4">
                        Oleh : {report.user.name}
                    </p>
                    <p className="">
                        Tanggal :{" "}
                        {convertUTCDateToLocalDate(
                            new Date(report.created_at)
                        ).toLocaleString()}
                    </p>
                    <div className="divider"></div>
                    <h3 className="text-xl font-serif font-semibold">
                        Catatan Laporan
                    </h3>
                    <p className="text-md">{report.detail}</p>
                    <div className="divider"></div>
                </div>
                <div className="overflow-x-auto flex justify-center">
                    <table className="table w-1/2 bg-warning">
                        {/* head */}
                        <tbody className="text-black">
                        {/* row 1 */}
                        <tr>
                            <td className='font-bold'>Rasa</td>
                            <td>: {report.rasa}</td>
                        </tr>
                        {/* row 2 */}
                        <tr>
                            <td className='font-bold'>Suhu</td>
                            <td>: {report.suhu}</td>
                        </tr>
                        {/* row 3 */}
                        <tr>
                            <td className='font-bold'>Kekentalan</td>
                            <td>: {report.kekentalan}</td>
                        </tr>
                        {/* row 4 */}
                        <tr>
                            <td className='font-bold'>Warna</td>
                            <td>: {report.warna}</td>
                        </tr>
                        {/* row 5 */}
                        <tr>
                            <td className='font-bold'>Bau</td>
                            <td>: {report.bau}</td>
                        </tr>
                        {/* row 6 */}
                        <tr>
                            <td className='font-bold'>Keasaman</td>
                            <td>: {report.keasaman}</td>
                        </tr>
                        </tbody>
                    </table>
                </div>
            </div>

            <div className="card w-full bg-white">
                <div className="card-body">
                    <h2 className="card-title">Feedback</h2>
                    {role === "petugas" && (
                        <form
                            onSubmit={storeFeedback}
                            method="post"
                            className="w-full flex flex-wrap"
                        >
                            <textarea
                                className="textarea textarea-bordered bg-white w-full mb-2"
                                placeholder="Masukkan pesan feedback"
                                required={true}
                                value={data.message}
                                onChange={(e) =>
                                    setData("message", e.target.value)
                                }
                            ></textarea>
                            <p className="text-red-500 text-sm mb-3">
                                {errors.message}
                            </p>

                            <button
                                type={"submit"}
                                className="btn btn-primary w-full"
                            >
                                Kirim
                            </button>
                        </form>
                    )}

                    {report.feedback.map((feedback, index) => (
                        <div
                            className="card border-2 w-full bg-white"
                            key={index}
                        >
                            <div className="card-body">
                                <h2 className="card-title badge badge-neutral py-3 px-6">
                                    Oleh : {feedback.user.name}
                                </h2>
                                <p>{feedback.message}</p>
                                <p className="font-serif">
                                    Tanggal :{" "}
                                    {convertUTCDateToLocalDate(
                                        new Date(feedback.created_at)
                                    ).toLocaleString()}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {flash.message && (
                <div
                    className="flex items-center p-4 mb-4 text-sm text-midnight rounded-lg  dark:text-green-500"
                    role="alert"
                >
                    <svg
                        className="flex-shrink-0 inline w-4 h-4 me-3"
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                    >
                        <path
                            d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5ZM9.5 4a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3ZM12 15H8a1 1 0 0 1 0-2h1v-3H8a1 1 0 0 1 0-2h2a1 1 0 0 1 1 1v4h1a1 1 0 0 1 0 2Z"/>
                    </svg>
                    <span className="sr-only">Info</span>
                    <div>
                        <span className="font-medium">Success alert!</span>{" "}
                        {flash.message}
                    </div>
                </div>
            )}
        </AdminLayout>
    );
}
