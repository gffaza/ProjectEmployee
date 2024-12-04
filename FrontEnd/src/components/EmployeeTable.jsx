import { useEffect, useState } from "react";
import Spinner from "./Spinner";

const dummyEmployeeData = [
  {
    id_employee: 1,
    nama: "Herry Gunardi",
    position: "Direktur Utama",
    role: "Direksi",
    department: "-",
    group: "-",
    lokasi_kerja: "Jakarta Pusat",
  },
  {
    id: 2,
    nama: "Saladdin D Effendi",
    position: "Direktur IT",
    role: "Direksi",
    department: "-",
    group: "-",
    lokasi_kerja: "Jakarta Pusat",
  },
];

const EmployeeTable = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [employeeData, setEmployeeData] = useState([]);

  useEffect(() => {
    // dummy set data
    setEmployeeData(dummyEmployeeData);
    setIsLoading(false);
  }, []);

  return (
    <div>
      {isLoading ? (
        <Spinner />
      ) : (
        <table className="min-w-full bg-white">
          <thead>
            <tr>
              <th className="px-4 py-2 border">No.</th>
              <th className="px-4 py-2 border">Nama</th>
              <th className="px-4 py-2 border">Role</th>
              <th className="px-4 py-2 border">Position</th>
              <th className="px-4 py-2 border">Role</th>
              <th className="px-4 py-2 border">Departmen</th>
              <th className="px-4 py-2 border">Group</th>
              <th className="px-4 py-2 border">Aksi</th>
            </tr>
          </thead>
             <tbody>
             {employeeData.map((employee, index) => (
               <tr key={index}>
                 <td>{index + 1}</td>
                 <td>{employee.nama}</td>
                 <td>{employee.position}</td>
                 <td>{employee.role}</td>
                 <td>{employee.department}</td>
                 <td>{employee.group}</td>
                 <td>{employee.lokasi_kerja}</td>
                 <td>
                    <button
                    //   onClick={() =>
                    //     (window.location.href = `/buku/${item.id_buku}`)
                    //   }
                    //   className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                    >
                      Ubah
                    </button>
                    <button
                    //   onClick={() => handleDelete(item.id_buku, item.nama_buku)}
                    //   className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
                    >
                      Hapus
                    </button>
                  </td>
               </tr>
             ))}
           </tbody>
        </table>
      )}
    </div>
  );
};

export default EmployeeTable;