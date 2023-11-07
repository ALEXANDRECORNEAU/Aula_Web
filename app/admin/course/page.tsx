import { sql } from "@vercel/postgres";
export default async function ListCourse() {
    const { rows } = await sql`SELECT * from courses`;
    return (
        <div>
            <h1 className="text-center">Lista de Cousos</h1>
            <table>
                <thead>
                    <tr>
                        <td>Titulo Curso</td>
                        <td>Descriçao</td>
                    </tr>
                </thead>
                <tr>
                    <td>Linha2 Col1</td>
                    <td>Linha2 Col2</td>
                </tr>
            </table>
        </div>

    )

}