import { api } from "../../../settings/default";

export default function api1({ params }) {
    return api.get('sisu/makeupLecture/nolectureMng/sel/1/', params)
        .then(res => {
            if (!res.ok) { return false; }

            const data2 = res.data;
            const rowLength2 = data2 && data2.length;

            return {
                data2,
                rowLength2,
            };
        })
}

