
import { sql } from "@vercel/postgres";
export const revalidate = 0
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
                <tbody>
                    {
                        rows.map((course) => {
                            return (
                                <tr>
                                    <dt>{course.title}</dt> 
                                    <td>{course.description}</td>
                                </tr>
                            )
                        })
                    }
                </tbody>
            </table>
        </div>

    )

}