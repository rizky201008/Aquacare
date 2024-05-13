import {router, useForm, usePage} from "@inertiajs/react";
import AdminLayout from "@/Layouts/AdminLayout.jsx";
import {Card, Table} from "flowbite-react";
import {useEffect} from "react";

export default function ReportDetail({auth}) {
    const role = auth.user.roles.name;
    const {report} = usePage().props;
    const {flash, errors, feedbacks} = usePage().props;
    const {data, setData, reset, put} = useForm({
        report_id: "",
        message: "",
    });

    useEffect(() => {
        setData('report_id', report.id);
    })

    const storeFeedback = (e) => {
        e.preventDefault();
        router.post(route('feedback.post'), data, {
            onSuccess: () => {
                reset();
            },
        });
    };

    function convertUTCDateToLocalDate(date) {
        let newDate = new Date(date.getTime() + date.getTimezoneOffset() * 60 * 1000);

        let offset = date.getTimezoneOffset() / 60;
        let hours = date.getHours();

        newDate.setHours(hours - offset);

        return newDate;
    }

    return (
        <AdminLayout>
            <div className="card w-full bg-white text-primary-content mb-3">
                <div className="card-body">
                    <h2 className="card-title">Laporan #{report.id}</h2>
                    <p>Oleh : {report.user.name}</p>
                    <p>Tanggal : {
                        convertUTCDateToLocalDate(new Date(report.created_at)).toLocaleString()
                    }
                    </p>
                    <div className="divider"></div>
                    <p className='text-xl'>
                        Detail Laporan
                    </p>
                    <p>
                        {report.detail}
                    </p>
                    <div className="divider"></div>
                </div>
                <div className="overflow-x-auto">
                    <table className="table">
                        {/* head */}
                        <thead>
                        <tr>
                            <th className='text-black font-bold'>#</th>
                            <th className='text-black font-bold'>Ciri-ciri</th>
                            <th className='text-black font-bold'>Detail</th>
                        </tr>
                        </thead>
                        <tbody>
                        {/* row 1 */}
                        <tr>
                            <th>1</th>
                            <th>Rasa</th>
                            <td>{report.rasa}</td>
                        </tr>
                        {/* row 2 */}
                        <tr>
                            <th>2</th>
                            <td>Suhu</td>
                            <td>{report.suhu}</td>
                        </tr>
                        {/* row 3 */}
                        <tr>
                            <th>3</th>
                            <td>Kekentalan</td>
                            <td>{report.kekentalan}</td>
                        </tr>
                        {/* row 4 */}
                        <tr>
                            <th>4</th>
                            <td>Warna</td>
                            <td>{report.warna}</td>
                        </tr>
                        {/* row 5 */}
                        <tr>
                            <th>5</th>
                            <td>Bau</td>
                            <td>{report.bau}</td>
                        </tr>
                        {/* row 6 */}
                        <tr>
                            <th>6</th>
                            <td>Keasaman</td>
                            <td>{report.keasaman}</td>
                        </tr>
                        </tbody>
                    </table>
                </div>
            </div>

            <div className="card w-full bg-white text-primary-content">
                <div className="card-body">
                    <h2 className="card-title">Feedback</h2>
                    <form onSubmit={storeFeedback} method="post" className="w-full flex flex-wrap">
                        <textarea className="textarea textarea-bordered bg-white w-full mb-2"
                                  placeholder="Masukkan pesan feedback" required={true} value={data.message}
                                  onChange={(e) =>
                                      setData("message", e.target.value)
                                  }>
                    </textarea>
                        <p className="text-red-500 text-sm mb-3">
                            {errors.message}
                        </p>

                        <button type={"submit"} className="btn btn-primary w-full">Kirim</button>
                    </form>

                    {report.feedback.map((feedback, index) => (
                        <div className="card border-2 w-full bg-white text-primary-content" key={index}>
                            <div className="card-body">
                                <h2 className="card-title">Oleh : {feedback.user.name}</h2>
                                <p>{feedback.message}</p>
                                <p>Tanggal : {
                                    convertUTCDateToLocalDate(new Date(feedback.created_at)).toLocaleString()
                                }</p>
                            </div>
                        </div>
                    ))
                    }

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
                        <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5ZM9.5 4a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3ZM12 15H8a1 1 0 0 1 0-2h1v-3H8a1 1 0 0 1 0-2h2a1 1 0 0 1 1 1v4h1a1 1 0 0 1 0 2Z" />
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
